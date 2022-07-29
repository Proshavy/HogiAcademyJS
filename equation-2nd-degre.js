public class equation{
    private double a,b,c;

    public double det(){
        return this.b*this.b-4*this.a*this.c;
        }
    public double sol_r1(){
        return (-this.b-Math.sqrt(det()))/(2*this.a);
        }
    public double sol_r2(){
        return (-this.b+Math.sqrt(det()))/(2*this.a);
        }
    public double part_reelle(){
        return -this.b/(2*this.a);
        }
    public double part_imag(){
        return Math.sqrt(-det())/(2*this.a);
        }

    public equation(int x,int y, int z){
        this.a=x;
        this.b=y;
        this.c=z;
        }
    public equation(){
        this(0,0,0);
        }
    public String toString(){
        if (this.det()>0){
                String ch="les solutions de votre equation sont : "+this.sol_r1()+" et "+this.sol_r2();
                return ch;
                }
        if (this.det()==0){
            String ch="il n'existe qu'une solution à votre equation : "+this.sol_r1();
            return ch;}

        if (this.det()<0){
            String ch="les solutions sont complexes : \n x1="+this.part_reelle()+" +i"+this.part_imag() +" et x2="+this.part_reelle()+" -i"+this.part_imag() ;
            return ch;}
        return "echec cuisant et total";
            }

    public static void main(String [] argv){
        equation e=new equation(2,4,2);
        equation f=new equation(1,95,2);
        equation g=new equation(65,2,80);
        System.out.println(e.toString());
        System.out.println(f.toString());
        System.out.println(g.toString());
        }

    public double getA() {
        return a;
    }

    public void setA(double value) {
        a = value;
    }

    public double getB() {
        return b;
    }

    public void setB(double value) {
        b = value;
    }

    public double getC() {
        return c;
    }

    public void setC(double value) {
        c = value;
    }
     }