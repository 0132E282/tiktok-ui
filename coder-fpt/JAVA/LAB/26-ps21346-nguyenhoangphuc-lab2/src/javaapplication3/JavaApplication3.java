
package javaapplication3;
import java.util.Scanner;
/**
 *
 * @author nguye
 */
public class JavaApplication3 {
// ham chay truong trinh 
    public static void main(String[] args) {
        Scanner input =new Scanner(System.in);
        System.out.println("bài 1 : giải phương trình bật nhất ");
        System.out.println("bài 2: giải phương trình bật hai");
        System.out.println("bài 3 : chương trình tính tiền điện");
        System.out.println("---------------------------------");
        System.out.print("nhập bài tập bạn muốn xem:");
        int nhapSo =input.nextInt();
        switch(nhapSo){
            case 1:
                bai1();
                break;
            case 2:
                bai2();
                break;
            case 3:
                bai3();
               break;
            case 4:
                bai5();
                break;
            default:
                System.out.println("không tìm thấy chương trình \n");
                break;
      }
    }
//    bai 1
    static void bai1(){
        Scanner input = new Scanner(System.in);
        double tong;
        System.out.println("chào mừng đến với chương trình giải phương trình bật một");
        System.out.print("nhap sô a:");
        double a = input.nextDouble();
        System.out.print("nhap số b:");
        double b = input.nextDouble();
        if(a == 0){
            if(b==0){
                System.out.println("phương trinh có vô số nghiệm\n");
            }else{
                System.out.println("vô nghiệm");
            }
        }else{
            tong =-b/a;
            System.out.println("nghiệm của phương trình là "+tong);
        }
    }
           
    static void bai2(){
        Scanner input = new Scanner(System.in);
        System.out.println("chào mừng tới chưởng trình giải phương trình cân bật 2");
        System.out.print("nhap số ax^2 :");
        double a = input.nextDouble();
        System.out.print("nhập số bx:");
        double b = input.nextDouble();
        System.out.print("nhap số c:");
        double c = input.nextDouble();
        double tong1,tong2,detla;
       
        if(a==0){
          System.out.println("a =0 thanh phương trinh bật 2");
          tong1= -b/c;
          System.out.println("=>"+tong1);
        }else{
          detla = (b*b)-(4*a*c);
        if(detla<0){
           System.out.println("phương trình vô nghiệm");
        }else if(detla==0){
            tong1 =-b/2*a;
            System.out.println("phuong trinh có hai ngiêm x1=x2=" +tong1);
            
        }else if(detla >0){
            tong1=(-b+Math.sqrt(detla))/(2*a);
            tong2=(-b-Math.sqrt(detla))/(2*a);
            System.out.println("Delta > 0: 2 nghiệm phân biệt ");
            System.out.println("x1:"+tong1);
            System.out.println("x2:"+tong2);
        }
        }
    }
    static void bai3(){
        Scanner input = new Scanner(System.in);
        System.out.println("chương trình tính tiền điện");
        System.out.print("nhap số điện tiêu thụ(kgw) : ");
        double tong=0, a = input.nextDouble();
        
        if(a<50){
            tong= a*1000; 
            System.out.println(tong);
            System.out.println("tong tiền điện là"+tong+"VNĐ");
        }else{
            tong= 50*1000+(a-50)*1200;
            System.out.println("tong tiền điện là"+tong+"VNĐ");
        }
       
    }
    /// bai 5 
    static void bai5(){
        Scanner input = new Scanner(System.in);
       System.out.print(" nhap so : ");
       int n = input.nextInt();
       int i=0,tong=0;
       tong(i,n);
       tich(i,n);
       chiaHetCho3(i,n);
       xuatNguoc(i,n);
}
    static void tong(int i ,int n ){
      int tong=0;
        for(i=0;i<=n;i++){
           tong+=i;
       }
       System.out.println("tong cac so : "+tong);
        
    }
    static void tich(int i ,int n){
        int tich=1;
        for(i=1 ; i<=n;i++){
            tich *=i;
        }
        System.out.println("tich : "+tich);
    }
    static void chiaHetCho3(int i , int n){
        int chiaHet3=0;
        System.out.print("cac so chi het cho 3:");
        for( i=0 ;i<n;i++){
            if(i%3 ==0){
                System.out.print(" "+i);
            }
        }
    }
    static void xuatNguoc(int i,int n){
        System.out.print("\n xuat nguoc : ");
        for(i=n;i>=0;i--){
            System.out.printf(" %d",i);
        }
    }
}
