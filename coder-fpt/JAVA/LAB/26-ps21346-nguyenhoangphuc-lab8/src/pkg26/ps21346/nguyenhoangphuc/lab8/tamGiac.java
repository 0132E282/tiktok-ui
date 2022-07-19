
package pkg26.ps21346.nguyenhoangphuc.lab8;

/**
 *
 * @author nguye
 */
public class tamGiac {
   final static String kiemTratamGiac(double a , double b,double c){
        double tamGiacVuong;
         if(a>b && a>c){
         tamGiacVuong=a*a;
         }else if(b>a || b>a){
             tamGiacVuong=b*b;
         }else{
          tamGiacVuong = c*c;   
         }
         if(tamGiacVuong==a*a + c*c || tamGiacVuong==b*b + c*c||tamGiacVuong==a*a+b*b){
           return "tam giac vuong";
         }else if(a == b && c==b){
          return "tam giac dieu";
         }else if(a == b || b==c || c==a){
         return "tam giac tam giac can";
         }else{
          return "tam giac Thuong";   
         }
    }
   final static double chuViTamGiac(double a , double b, double c){
        return a+b+c;
    }
   final static double dienTichTamGiac(double a , double b, double c){
        double tg,p;
        p =(a+b+c)/2;
        tg=Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return Math.ceil(tg);
    }
 }