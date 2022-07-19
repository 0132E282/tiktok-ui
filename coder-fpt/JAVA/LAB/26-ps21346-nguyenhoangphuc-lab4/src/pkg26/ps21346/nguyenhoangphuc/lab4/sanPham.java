
package pkg26.ps21346.nguyenhoangphuc.lab4;

import java.util.Scanner;

/**
 *
 * @author nguye
 */
public class sanPham {
    private String sanPham;
    private float gia;
    private float thue;
    private float giamGia;
    public sanPham(String tenSanPham , float gia, float giamGia){
        this.sanPham=tenSanPham;
        this.gia=gia;
        this.giamGia=giamGia;
    }
      public sanPham(){
          
      }
     public sanPham(String tenSanPham, float gia ){
         this(tenSanPham , gia ,0);
     }
     private float getthue1(){
       return thue = (float) 0.1;   
     }
    private float getthue2(){
       if(gia < 500){
           return thue = 0;   
       }else if(gia > 500 || gia <10000){
          return thue = gia*(float)0.05;   
       }
       return thue = gia*(float)0.1;
    }
     public String getSanPHam(String SanPham){
         this.sanPham=SanPham;
         return sanPham;
     }
     public float gia (float g){
         this.gia = g;
         return g;
     }
     public float giam (float gg){
         this.giamGia=gg;
         return gg;
     }
     
    void inputSanPham(){
         Scanner input = new Scanner(System.in);
         System.out.print("nhap ten san pham");
         sanPham = input.nextLine();
         System.out.print("nhap gia san pham");
         gia = input.nextFloat();
         System.out.print("nhap giam gia san pham");
         giamGia = input.nextFloat();
    }
    void ouputSanPham(){
      
        System.out.println("ten dsan pham :"+sanPham);
        System.out.println("gia san pham "+ gia);
        System.out.println("giam gia "+giamGia);
        System.out.println("thue"+getthue1());
    }
        void ouputSanPham1(){
        System.out.println("ten dsan pham :"+sanPham);
        System.out.println("gia san pham "+ gia);
        System.out.println("giam gia "+giamGia);
        System.out.println("thue"+getthue2());
    }
}
