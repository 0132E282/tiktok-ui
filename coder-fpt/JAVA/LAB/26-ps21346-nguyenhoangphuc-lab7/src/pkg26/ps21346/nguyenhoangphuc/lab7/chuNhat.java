
package pkg26.ps21346.nguyenhoangphuc.lab7;

import java.util.Scanner;

public class chuNhat {
    float chieuDai;
    float chieuRong;
    Scanner input = new Scanner(System.in);
    public chuNhat() {
    }

    public chuNhat(float chieuDai, float chieuRong) {
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }
    public float getChieudai(){
        return chieuDai;
    }
    public void setChieudai(float chieuDai){
        this.chieuDai = chieuDai;
    }
    public float getChieuRong() {
        return chieuRong;
    }

    public void setChieuRong(float chieuRong) {
        this.chieuRong = chieuRong;
    }
    public float getChuVi() {
        return this.chieuDai * this.chieuRong;
    }
    public float getDienTich(){
        return (this.chieuDai+this.chieuRong)*2;
    }

    
    void input(){
     System.out.print("nha chieu dai :");
     chieuDai = input.nextFloat();
     System.out.print("nhap chieu rong :");
     chieuRong = input.nextFloat();
    }
    void ouput(){
     System.out.println("chieu dai la "+chieuDai);
     System.out.println("chieu rong la "+chieuRong);
     System.out.println("chu vi cua hinh chu nhat "+this.getChuVi());
     System.out.println("dien tich cua chu nhat "+this.getDienTich());
    }
}
