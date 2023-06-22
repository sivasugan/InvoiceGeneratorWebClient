import io from "socket.io-client"
import { PdfGenerator } from "./PdfGenerator";

const pdfGenerator = new PdfGenerator()
let pdfData 
export class SocketServer{
    
    constructor(socketID){
        
        this.newSocket  = io('http://localhost:3101');
        this.newSocket.on(socketID, (pdf) => {
            this.outputHtml = pdf
            pdfGenerator.downloadPdfFromHtml(pdfData, pdf)
            
        })

    }
    
 
    async EmitDataToSocket(socketID, dataToEmit){
        
        pdfData = dataToEmit
        this.newSocket.emit(socketID, dataToEmit);
    }


}