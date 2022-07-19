
package pkg26.ps21346.nguyenhoangphuc.lab7;

public class sinhVienbig extends sinhVien {
    float diemMarketing;
    float diemSale;

    public sinhVienbig() {
    }

    public sinhVienbig(float diemMarketing, float diemSale) {
        this.diemMarketing = diemMarketing;
        this.diemSale = diemSale;
    }
    @Override
    public float getdiem() {
       return (diemMarketing * 2 + diemSale) / 3;
    }

    @Override
    float getmon() {
       if(diemMarketing < diemSale){
        return diemMarketing;   
       }else{
          return diemSale;
       }
    }
    void input(){
     System.out.print("nhap diem marketing :");
     diemMarketing = input.nextFloat();
     System.out.print("nhap diem sale :");
     diemSale = input.nextFloat();
    }
}
