import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { catchError, debounce, debounceTime, fromEvent, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    contactsArray: Contact[] = [];
    dataInDataBase: any;

    constructor(private angularFireBase: AngularFireDatabase) {
    }

    setDataBase(): void {
        this.angularFireBase.object('contacts/').update(this.contactsArray);
    }

    getDataBase(): void {
        this.getContacts();
    }

    getContacts() {
        return new Promise((resolve, reject) => {
            this.dataInDataBase = this.angularFireBase.object('contacts/').snapshotChanges();

            this.dataInDataBase.pipe(
                catchError(async (error) => reject(this.message))
            ).subscribe((action: { payload: { val: () => Contact[]; }; }) => {
                resolve(this.contactsArray = action.payload.val());
            });
        });
    }

    setNewContact(newContact: Contact): void {
        this.contactsArray.push(newContact);
        this.setDataBase();
    }

    message(message: any): void | PromiseLike<void> {
        throw new Error('Function not implemented.');
    }
}