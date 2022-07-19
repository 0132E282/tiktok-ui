
package javaapplication12;
import java.util.Scanner;

public class sinhVien {
    private String name ;
    private String maSo;
    private float diem;
    public void setName(String name){
     this.name = name;   
    }
    public void setDiem(float diem){
     this.diem = diem;
    }
    public String getName(){
        return name;
    }
    public float getdiem(){
        return diem;
    }
    Scanner input = new Scanner(System.in);
    void input (){
     System.out.print("nhap ten :");
     name = input.nextLine();
     System.out.print("nhap diem :");
     diem = input.nextFloat();
     input.nextLine();
    }
    void ouput(){
     System.out.println("ten sinh vien "+name);
     System.out.println("diem cua sinh vien "+ diem);
    }
}
