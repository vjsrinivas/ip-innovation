import { Component, OnInit, Input } from '@angular/core';
import {json2csv} from 'json-2-csv'
import {saveAs} from 'file-saver'
import { convertPropertyBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})

export class ExportCsvComponent implements OnInit {

  constructor() { }

  //Input must be set when the component is used
  @Input() json: any

  ngOnInit() {
  }

  OnClickButton(e: Event)
  {
    if(this.json == null)
      alert('No Specified File')
    else
      json2csv([this.json], this.download)
  }

  download(err:any, csv: any)
  {
    let blob = new Blob([csv], {type: "text/csv"})
    saveAs(blob, "adminBadges.csv")
  }
}
