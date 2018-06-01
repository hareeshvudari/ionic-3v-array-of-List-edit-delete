import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class Notes {

	public createdDate = new Date();

	notes: any = [{'title':'Saleem'}, {'title':'Hareesh'}, {'title':'Shravan'}, {'title':'Raju'}, {'title':'Omkar'}];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

	}

	addNote(){

		let prompt = this.alertCtrl.create({
			title: 'Add Note',
			inputs: [{
				name: 'title'
			}],
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Add',
					handler: data => {
						this.notes.push(data);
					}
				}
			]
		});

		prompt.present();
	}

	editNote(note){

		let prompt = this.alertCtrl.create({
			title: 'Edit Note',
			inputs: [{
				name: 'title'
			}],
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Save',
					handler: data => {
			            let index = this.notes.indexOf(note);

			            if(index > -1){
			              this.notes[index] = data;
			            }
					}
				}
			]
		});

		prompt.present();		

	}

	deleteNote(note){

		let index = this.notes.indexOf(note);

		if(index > -1){
			this.notes.splice(index, 1);
		}
	}

}