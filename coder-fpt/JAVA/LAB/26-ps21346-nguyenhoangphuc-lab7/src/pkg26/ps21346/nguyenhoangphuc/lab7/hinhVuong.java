
package pkg26.ps21346.nguyenhoangphuc.lab7;

import java.util.Scanner;
public class hinhVuong extends chuNhat{

    public hinhVuong() {
    }

    public hinhVuong(float chieuDai, float chieuRong) {
        super(chieuDai, chieuRong);
    }
    void inputHinhVuong(){
         Scanner input = new Scanner(System.in);
         System.out.print("nhap Canh :");
        float canh = input.nextFloat();
          super.setChieudai(canh);
          super.setChieuRong(canh);
    }
    public void ouputHinhVuong(){
     System.out.println("canh : "+this.getChieudai());
     System.out.println("chu dien tich hinh vuong :"+getChuVi());
     System.out.println("chu vi hinh vuong :"+getDienTich());
     }
}
