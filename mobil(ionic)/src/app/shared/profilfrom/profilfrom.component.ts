import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'
import userInfo from '../../_helpers/userifos/login-infos'
import { dowloadPdfBlob } from '../../_helpers/speed-function'
import _locations from '../../static/location'
import _cat from '../../static/cat'
import { NativesService } from '../../_helpers/natives/natives.service'
import { DomSanitizer } from '@angular/platform-browser';
import{dataURLtoFile} from'../../_helpers/speed-function'
@Component({
  selector: 'app-profilfrom',
  templateUrl: './profilfrom.component.html',
  styleUrls: ['./profilfrom.component.scss'],
})
export class ProfilfromComponent implements OnInit {
  @Output() getDataForm: EventEmitter<any> = new EventEmitter();
  @Output() upPdfCv: EventEmitter<any> = new EventEmitter();
  userInfo: any;
  locations: any;
  cat: any;
  iframeUrl: any;
  validation_form: FormGroup;  //https://angular.io/guide/form-validation

  depls: any = [];
  exps: any = [];
  validation_messages = {
    nom: [
      { type: "required", message: "required" },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      }

    ],
    prenom: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      },
    ],
    phone: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      },
      {

        type: "pattern", message: " Number"
      }
    ],
    adresse: [
      { type: "required", message: "required." }


    ],
    cat: [
      { type: "required", message: "required." }


    ]




  }

  constructor(public sanitizer: DomSanitizer, public native: NativesService, public authService: AuthService, public formbuilder: FormBuilder) {
    this.authService.getUserByid(userInfo.getUserId()).then(({ data }) => {
      this.userInfo = data[0]

      this.exps = JSON.parse(this.userInfo._exp)
      this.depls = JSON.parse(this.userInfo._deplo)
      const numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
      this.validation_form = this.formbuilder.group({
        nom: new FormControl(this.userInfo.nom,
          Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )
        ),
        phone: new FormControl(this.userInfo.phone,
          Validators.compose([
            Validators.required,
            Validators.pattern(numericNumberReg),
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )),
        prenom: new FormControl(this.userInfo.prenom,
          Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(5)

          ]
          )),
        adresse: new FormControl(this.userInfo.adresse,
          Validators.compose([
            Validators.required


          ]
          )),
        cat: new FormControl(this.userInfo._cat,
          Validators.compose([
            Validators.required


          ]
          ))

      })


    })




  }
  getDataFromForm(action: any): void {
    let experience = JSON.stringify(this.exps)
    let deplom = JSON.stringify(this.depls)

    this.getDataForm.emit({ ...action, experience, deplom, info: this.userInfo.info, userId: userInfo.getUserId() })


  }

  updateCv() {


    const formData = new FormData(); // userid + file

    formData.append('userId', userInfo.getUserId())  // get use id 
    
    this.native.getFileInfo().then((result) => {
      // result.fileName;
    const file= dataURLtoFile(result.fileData) ;
    formData.append('pdf',file ) 

    //  result.fileSize;
    // result.fileType; 
    
    this.upPdfCv.emit(formData)
  }).catch((error) => {
     alert('File can not be uploaded.');
  });
   


  }

  ngOnInit() {
    this.locations = _locations;
    this.cat = _cat;
  }

  openCv() {

    this.authService.getPdf().then(({ data }) => {
      this.native.downloadFile(data)

    }, () => {

    })

  }

  removeItemExp(idExp) {

    if (window.confirm("Are you sure exp")) {


      let newExp = Object.assign([], this.exps)
      newExp.splice(idExp, 1)
      this.exps = Object.assign([], newExp)

    }


  }
  removeItemDeplo(idDepl) {

    if (window.confirm("Are you sure deplo")) {

      let newDeplo = Object.assign([], this.depls)
      newDeplo.splice(idDepl, 1)
      this.depls = Object.assign([], newDeplo)

    }

  }
  addItemExp(expField) {
    let newExps = Object.assign([], this.exps)
    newExps.push(expField)
    this.exps = Object.assign([], newExps)



  }

  addItemDeplo(deplField) {
    let newDepls = Object.assign([], this.depls)
    newDepls.push(deplField)
    this.depls = Object.assign([], newDepls)

  }

}
