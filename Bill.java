import java.util.* ;
public class Bill extends Bed{
    static String billID;
    static String billpay;

    public void payment(Bed bedassign){
        Scanner input18 = new Scanner (System.in);
        System.out.print("What is the Patient ID:");
        billID = input18.nextLine();
        Scanner input19 = new Scanner (System.in);
        System.out.print("What is the Patient Payment:");
        billpay = input19.nextLine();

        System.out.println("");
        System.out.println("Bill for"+" "+billID+"_"+name);
        System.out.println("-----------------------------");
        System.out.println("Name :"+" "+name);
        System.out.println("payment :"+" "+billpay+"$");
        System.out.println("");
        System.out.println("Have A Good Day...");
        


    }
}