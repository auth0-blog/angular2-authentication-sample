export class JSONPipe extends Pipe {
 supports(obj) {
   return true;
 }

 transform(value) {
   return JSON.stringify(value, null, 2);
 }
}
