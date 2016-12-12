import { Component, OnInit } from '@angular/core';
import 'pdfjs-dist/build/pdf.combined';
//import * as Tesseract from '@types/tesseract.js';
//import 'tesseract.js/dist/tesseract';
declare function require(name: string);

@Component({
    selector: 'app-pdf-ocr',
    templateUrl: './pdf-ocr.component.html',
    styleUrls: ['./pdf-ocr.component.css'],
})
export class PdfOcrComponent implements OnInit {
    ngOnInit() { }
    handleFileSelect(event): void {
        console.log(event.target);
        let files = event.srcElement.files;
        console.log(files);
        this.readThis(event.target);

    }

    readThis(inputValue: any): void {
        console.log("readThis: inicio");
        var file: File = inputValue.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function (ev) {
            console.log(ev);
            (<any>window).PDFJS.getDocument(fileReader.result).then(function getPdfHelloWorld(pdf) {
                //
                // Fetch the first page
                //
                console.log(pdf)
                pdf.getPage(1).then(function getPageHelloWorld(page) {
                    var scale = 1.5;
                    var viewport = page.getViewport(scale);
                    //
                    // Prepare canvas using PDF page dimensions
                    //
                    var canvas: any = document.getElementById('the-canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    //
                    // Render PDF page into canvas context
                    //
                    var task = page.render({ canvasContext: context, viewport: viewport })
                    task.promise.then(function () {
                        console.log("image loaded");
                    });
                });
            }, function (error) {
                console.log(error);
            });
        };
        console.log("antes de readAsArrayBuffer")
        fileReader.readAsArrayBuffer(file);
        console.log("readThis: fim");
        // if we know our image is of spanish words without the letter 'e':
        let canvas: any = document.getElementById('the-canvas');
        var Tesseract = require('tesseract.js');
        Tesseract.recognize(canvas, {
            lang: 'eng'
        })
            .progress(function (p) { console.log('progress', p) })
            .then(data => {
                let canvasText: any = document.getElementById('the-canvas-text');
                canvasText.innerHTML += data.text;
            })
            .catch(err => {
                console.log('catch\n', err);
            })
            .finally(e => {
                console.log('finally\n');
            });
    }
}