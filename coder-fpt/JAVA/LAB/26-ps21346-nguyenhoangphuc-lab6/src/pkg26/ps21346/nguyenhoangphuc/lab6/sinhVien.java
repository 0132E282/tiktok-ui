
package pkg26.ps21346.nguyenhoangphuc.lab6;

import java.util.Scanner;

public class sinhVien {
    private String ten,scmdd,email,sdt;
    float toan,li,hoa,diemTb;

    public float getDiemTb() {
        return diemTb;
    }

    public void setDiemTb(float diemTb) {
        this.diemTb = diemTb;
    }
    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getScmdd() {
        return scmdd;
    }

    public void setScmdd(String scmdd) {
        this.scmdd = scmdd;
    }

    public float getToan() {
        return toan;
    }

    public void setToan(float toan) {
        this.toan = toan;
    }

    public float getLi() {
        return li;
    }

    public void setLi(float li) {
        this.li = li;
    }

    public float getHoa() {
        return hoa;
    }

    public void setHoa(float hoa) {
        this.hoa = hoa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }
    static Scanner input = new Scanner(System.in);
    void inputSv(){
        do{
        System.out.print("nhap ten :");
        ten = input.nextLine();
        if(ten.matches("[0-9]")){
            System.out.println("\nnhap Sai nhap la");
        }
        }while(ten.matches("[0-9]"));
        do{
        System.out.print("nhap scmdd :");
        scmdd =input.nextLine();
        if(!scmdd.matches("[0-9]{9}")){
           System.out.println("\nnhap sai nhap lai");
        }
        }while(!scmdd.matches("[0-9]{9}"));
        do{
            System.out.print("nhap sdt:");
            sdt=input.nextLine();
            if(!sdt.matches("0[0-9]{9,10}")){
              System.out.println("nhap sai nhap lai");   
            }
        }while(!sdt.matches("0[0-9]{9,10}"));
        do{
            System.out.print("nhap email:");
            email= input.nextLine();
            if(!email.matches("\\w+@+\\w+\\.+\\w+")){
                System.out.println("nhap Sai Nhap Lai");
            }
        }while(!email.matches("\\w+@+\\w+\\.+\\w+"));
        do{
            System.out.print("nhap mon toan:");
            toan=input.nextFloat();
          if(toan>10||toan<0){
              System.out.println("nhap sai nhap lai");
          }
        }while(toan>10||toan<0);
       do{
            System.out.print("nhap mon li:");
            li=input.nextFloat();
          if(li>10||li<0){
              System.out.println("nhap sai nhap lai");
          }
        }while(li>10||li<0);
       do{
            System.out.print("nhap mon hoa:");
            hoa=input.nextFloat();
          if(hoa>10||hoa<0){
              System.out.println("nhap sai nhap lai");
          }
        }while(hoa>10||hoa<0);
          input.nextLine();
    }
    void ouputThongTin(){
     System.out.println("ten :"+ten);
     System.out.println("cmdd :"+scmdd);
     System.out.println("email"+email);
     System.out.println("sdt :"+sdt);
     System.out.println("diem toan :"+toan);
     System.out.println("diem ly :"+li);
     System.out.println("diem hoa :"+hoa);
    }
    void ouputHocLuc(){
        diemTb = (toan + li + hoa)/3;
        System.out.println("diem trung binh :"+diemTb);
        if(diemTb < 3.5){
         System.out.println("hoc luc :kem");
        }else if(diemTb < 5){
         System.out.println("hoc luc :yeu");
        }else if(diemTb < 6.5){
         System.out.println("hoc luc : trung binh");
        }else if(diemTb < 8.5){
         System.out.println("hoc luc : kha");
         System.out.print("nhan hoc bong : 1.5tr vnd");
        }else {
          System.out.println("hoc luc : gioi");
          System.out.print("nhan hoc bong : 2tr vnd");
        }
    }
}
