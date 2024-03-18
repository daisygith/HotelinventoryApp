import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../serivces/config.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookingService} from "./booking.service";
import {exhaustMap, mergeMap, switchMap} from "rxjs";
import {CustomValidators} from "../validators/custom-validators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{

  get guests(): FormArray {
    return <FormArray> this.bookingForm.get('guests') as FormArray;
  }

  bookingForm !: FormGroup;

  constructor(private configService: ConfigService, private fb:FormBuilder,
              private bookingService: BookingService,
              private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({
      roomId: new FormControl({value: roomId, disabled: true},{validators:[Validators.required]}),
      guestEmail: ['',{updateOn:'blur', validators:[Validators.required, Validators.email]}],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', {
        updateOn:'blur'
      }],
      guestName: ['',[Validators.required,Validators.minLength(5),
        CustomValidators.ValidateName,
        CustomValidators.ValidateSpecialChar('*'),]],
      address: this.fb.group({
        addressLine1: ['', {validators: [Validators.required]}],
        addressLine2: [''],
        city: ['', {validators: [Validators.required]}],
        state: ['', {validators: [Validators.required]}],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        // this.fb.group({guestName: [''], age: new FormControl('')}),
        this.addGuestControl()]),
      tnc: new FormControl(false, {validators:[Validators.requiredTrue]}),
    },
      {
        updateOn:'blur', validators : [CustomValidators.validateDate]
      });

    this.getBookingDate();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   // console.log(data);
    //   this.bookingService.bookRoom(data).subscribe((data) => {})
    // });

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) =>  console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
    //   console.log(data);
    // })
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate:'',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingDate() {
    this.bookingForm.patchValue({
      guestEmail: 'test@testgmail.com',
      checkinDate: new Date('10-Feb-2022'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    })
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl(){
    return this.fb.group({
      guestName: ['',{validators: [Validators.required]}], age: new FormControl('')});
  }

  addPassport() {
    this.bookingForm.addControl('passport',new FormControl(''));
  }

  deletePassport() {
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
//
// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: Guest[];
// }
