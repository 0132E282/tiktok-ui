
package asm;
public class tiepThi extends nhanSu {
     float danhSo,tiLeHoaHong,luong;

    public tiepThi(float danhSo, float tiLeHoaHong, float luong) {
        this.danhSo = danhSo;
        this.tiLeHoaHong = tiLeHoaHong;
        this.luong = luong;
    }

    public tiepThi(String ten, String chucVu, String ma,float danhSo, float tiLeHoaHong, float luong) {
        super(ten, chucVu, ma);
        this.danhSo = danhSo;
        this.tiLeHoaHong = tiLeHoaHong;
        this.luong = luong;
    }

    public tiepThi() {
    }

     
    @Override
    float getLuong() {
        return (luong+(danhSo*tiLeHoaHong));
    }
  public   void input(){
      System.out.print("nhap luong co ban :");
       luong = input.nextFloat();
       System.out.print("nhap danh so ban tien :");
       danhSo=input.nextFloat();
       System.out.print("nhan ti le hoa hong :");
       tiLeHoaHong = input.nextFloat();
       do{
        input.nextLine();
        if(tiLeHoaHong<0||tiLeHoaHong > 1){
         System.out.println("nhap sai nhap lai");
        }
      }while(tiLeHoaHong<0||tiLeHoaHong > 1);
    }
   public  void ouput(){
     super.ouputNhanSu();
     System.out.println("danh do :"+danhSo);
     System.out.println("ti le hoa hong :"+tiLeHoaHong);
    }
     
}
