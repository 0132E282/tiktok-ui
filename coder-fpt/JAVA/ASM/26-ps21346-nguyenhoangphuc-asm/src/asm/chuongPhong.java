
package asm;
public class chuongPhong extends nhanSu{
    float luong,luongTrachNhiem;

    public chuongPhong() {
    }

    public chuongPhong(float luong, float luongTrachNhiem) {
        this.luong = luong;
        this.luongTrachNhiem = luongTrachNhiem;
    }

    public chuongPhong( String ten, String chucVu, String ma,float luong, float luongTrachNhiem) {
        super(ten, chucVu, ma);
        this.luong = luong;
        this.luongTrachNhiem = luongTrachNhiem;
    }
    @Override
    float getLuong() {
        return luong + luongTrachNhiem; 
    }
    public  void input(){
     System.out.print("nhap luong co ban :");
     luong = input.nextFloat();
     System.out.print("nhap luong trach nhiem :");
     luongTrachNhiem=input.nextFloat();
     input.nextLine();
    }
    public void ouput(){
     super.ouputNhanSu();
     System.out.println("luong co ban :"+luong);
     System.out.println("luong trach nhiem :"+ luongTrachNhiem);
    }
}
