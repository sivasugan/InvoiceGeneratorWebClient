import io from "socket.io-client"
import { PdfGenerator } from "./PdfGenerator";

const pdfGenerator = new PdfGenerator()
let pdfData 
export class SocketServer{
    
    constructor(socketID){
        console.log(socketID)
        this.newSocket  = io('http://localhost:3101');
        this.newSocket.on(socketID, (pdf) => {
            this.outputHtml = pdf
            pdfGenerator.downloadPdfFromHtml(pdfData, pdf)
            console.log("outputHtml",this.outputHtml)
        })

    }
    
 
    async EmitDataToSocket(socketID, dataToEmit){
        console.log("dataToEmit",dataToEmit)
        pdfData = dataToEmit
        console.log("data to emit",dataToEmit)
        this.newSocket.emit(socketID, dataToEmit);
    }


}