
package baithi;

public class sinhVien extends conNguoi{
    double diem;
    String hocLuc;

    public sinhVien(double diem, String hocLuc) {
        this.diem = diem;
        this.hocLuc = hocLuc;
    }

    public sinhVien(double diem, String hocLuc, String ten, int namSInh) {
        super(ten, namSInh);
        this.diem = diem;
        this.hocLuc = hocLuc;
    }

    public sinhVien() {
    }
    void nhapSV(){
      super.nhap();
      System.out.print("nhap diem :");
      diem = input.nextDouble();
      input.nextLine();
    }
    void hocLuc(){
      if(diem > 7.5){   
       hocLuc = " gioi";   
      }else if(diem > 6.5){
       hocLuc = "khac";   
      }else if(diem > 5){
        hocLuc = "trung binh";
      }else{
        hocLuc = "yeu";
      }
    }
    void xuatSv(){
    
     super.xuat();
     System.out.println("diem :"+diem);
     System.out.println("hoc luc :"+hocLuc);
    }
    
}
