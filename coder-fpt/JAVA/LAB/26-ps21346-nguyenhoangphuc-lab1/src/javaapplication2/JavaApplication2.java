
package javaapplication2;
import java.util.Scanner;
public class JavaApplication2 {
           
    public static void main(String[] args) {
        cau1();
        cau2();
        cau3();
        cau4();
    }
    static void cau1(){
          Scanner input = new Scanner(System.in);
//        bai 1     
        System.out.print("Họ và tên :");
        String name = input.nextLine();
        System.out.print("Nhập điểm :");
        double diem = input.nextDouble();
        System.out.println("Ho va ten : " + name);
        System.out.println("Diem : " + diem);
}
    static void cau2(){
        Scanner input = new Scanner(System.in);
        System.out.print(" nhap chieu dieu dai cua hinh chu nhat :");
        float width = input.nextFloat();
        System.out.print("nhap chieu chieu cao cua hinh chu nhat :");
        float height = input.nextFloat();
        float chuVi= (width + height)*2;
        float dienTich=width * height;
        System.out.println("chu vi hinh chua nhat :\n" + chuVi);
        System.out.println(" dien tich hinh chua nhat : \n" + dienTich);
        System.out.println(" nho nhat : \n" + Math.min(width,height));
}
    static void cau3(){
        Scanner input = new Scanner(System.in);
        System.out.print("nhap mot cach bat ky: \n");
        float edge = input.nextFloat();
        float theTich = edge*edge*edge;
        System.out.println("the tich cua hinh chua nhat \n" + theTich);
}
    static void cau4(){
        Scanner input = new Scanner(System.in);
        System.out.print("nhap he so a :");
        int a = input.nextInt();
         System.out.print("nhap he so b :");
        int b = input.nextInt();
         System.out.print("nhap he so c :");
        int c = input.nextInt();
        int datle = b*b -4 *a*c;
        System.out.println("datle :\n"+ Math.sqrt(datle));
}
}
