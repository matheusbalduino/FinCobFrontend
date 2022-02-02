export class Util{

  public dataBrasil(data:Date):string{

    var dia = data.getDay().toString().padStart(2,'0');
    var mes = data.getMonth().toString().padStart(2,'0');
    var year = data.getFullYear().toString();

    return `${dia}/${mes}/${year}`;
  }
}
