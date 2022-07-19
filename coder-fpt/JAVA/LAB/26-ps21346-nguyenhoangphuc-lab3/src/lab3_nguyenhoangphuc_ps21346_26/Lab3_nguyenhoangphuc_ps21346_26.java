
package lab3_nguyenhoangphuc_ps21346_26;
import java.util.Scanner;
public class Lab3_nguyenhoangphuc_ps21346_26 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("bài 1 : kiem tra so nguyen to ");
        System.out.println("bài 2 : dem cac so nguyen to ");
        System.out.println("bai 3 :day so Fibonacci");
         System.out.println("bài 4 : diem ten sinh vien  ");
          System.out.println("bài 5 : lai suat ngan hang  ");
        System.out.print("nhập chương trinh ");
        int nhapSo = input.nextInt();
         switch(nhapSo){
             case 1:
                 System.out.println("kiem tra so nguye to");
                 bai1();
             break;
             case 2:
                 System.out.println("dem cac so nguyen to ");
                 bai2();
              break;
             case 3:
                 System.out.println("day so Fibonacci");
                 bai3();
              break;
             case 4:
                  System.out.println("chuong trinh dem ten ");
                 bai4();
                break;
             case 5:
                 System.out.println("lai xuat ngang hang ");
                 bai5();
              break;
             default :
                 System.out.println(" khong thay chuong trinh ");
                 break;
             
         }

    }
    
    static void bai1(){
        Scanner input =new Scanner(System.in);
        System.out.print("nhap số nguyên bất kỳ ");
        double n = input.nextDouble();
        int i = 0;
        boolean ok = true;
        for(i=2;i<n;i++){
            if(n%i==0){
                ok = false;
                break;
            }
        }
            if(ok == false){
                System.out.println("không phải số nguyên tố ");
            }else{
                System.out.println(i+":là số nguyên tố");
            }
        }
//    bai2
    static void bai2(){
        int i,dem=0;
        Scanner input =new Scanner (System.in);
        System.out.println("day so nguyen to");
         int n = input.nextInt();
         for(i=2;i <= n;i++){
           if(SNT(i)==false){   
               System.out.println("so nuyen to "+i);
               dem ++;
           }
         }
         System.out.println("tong cac so nguyen to "+dem);
    }
    static boolean SNT(int n){
        int i;
        for(i=2 ;i < n;i++){
            if(n%i ==0){
               return true;
            }
        }
        return false;
    }
//    bai 3 
    static void bai3(){
        Scanner input = new Scanner (System.in);
        int i ,n,tong=0;
        System.out.print("n : ");
        n = input.nextInt();
        if(n==0|| n==1){
            tong =1;
        }else{
        for(i=2 ; i<n ;i++){
               tong+=n-i;
        }
        }
       System.out.println("tong so Fibonacci :"+tong);
    }
    
//     bai 4
    static void bai4(){
        int i,n,j,k,dem=0;
        Scanner input = new Scanner(System.in);
        System.out.print("nhap so luong ho : ");
        n = input.nextInt();
        String Ho[] = new String[n];
        System.out.print("nhap so luong ten lot :");
        j = input.nextInt();
        String tenLot[] = new String[j];
        System.out.print("nhap so luong ten ");
        k =input.nextInt();     
        String ten[] = new String[k];   
        input.nextLine();
        for(i=0;i<n;i++){        
            System.out.printf("Ho [%d]",i);
            Ho[i] = input.nextLine();
        }
          for(i=0;i<k;i++){
            System.out.printf("ten Lot [%d]",i);
            tenLot[i] = input.nextLine(); 
        }
            for(i=0;i<k;i++){
            System.out.printf("ten [%d]",i);
            ten[i] = input.nextLine(); 
        }
        for(String h:Ho){
         for(String Tl:tenLot){   
          for(String T:ten){   
           System.out.println(h+" "+Tl+" "+T+" ");
           dem ++;
          }
         }
        }
        System.out.printf("tong ten :%d ",dem);
     }   
//     bài 5
    static void bai5(){
        Scanner input = new Scanner(System.in);
        double tienVay=0,tienLai=0,laiSuat,tienTraHangThang=0,nam=0,thang=0;
        System.out.print("nhap so so tien muong vay :");
        tienVay= input.nextInt();
        System.out.print("nhap so nam : ");
        nam = input.nextInt();
        System.out.print("nhap lai xuat :");
        laiSuat = input.nextDouble();
        tienTraHangThang = (int)tienVay /(nam*12);
        System.out.println(" thang      \t tien goc\ttien tra hang thang\ttien lai \t tong tra ");
        while(tienVay != 0){
         thang ++;
         tienLai = (int)tienVay*(laiSuat/12);
         System.out.printf("%f \t  %f \t  %f \t     %f\t   %f \n",thang,tienVay,tienTraHangThang,tienLai,(tienTraHangThang+tienLai));
        
        if(tienVay >= tienTraHangThang)
            tienVay -= tienTraHangThang;
        else
          tienTraHangThang=tienVay;        
        }
    }

}
        
  
