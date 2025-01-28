 /* Split a string represent an IP address:
 ➢ Use string split(“\\.”)
 ➢ Use StringTokenizer
 ➢ The program, for example: your Input :
 ➢ 163.121.12.30
 ➢ Theresult is :
 163
 121
 12
 30
*/

import java.util.StringTokenizer;
class IpCutter{
	String cmdLine;

	public IpCutter(String _cmdLine)
	{
		cmdLine=_cmdLine;
	}
	
	int[] doIpSplitStringClass(){
		String [] ipPartsStr =  cmdLine.split("\\.");
		int [] ipParts =  new int [ipPartsStr.length];
		int index = 0;
		for (String part : ipPartsStr) {
                	ipParts[index] = Integer.parseInt(part);
			index++;
        	}
		return ipParts;
	}

	int[] doIpSplitStringTokenizer(){
 		int index=0;
		StringTokenizer st = new StringTokenizer(cmdLine,".");
		int[] ipParts = new int[st.countTokens()];
		while (st.hasMoreTokens()) {
           		 ipParts[index]= Integer.parseInt(st.nextToken());
			 index++;
       		}
		return ipParts;
	}
}

public class LectureDemo{
	public static void main(String [] args){
		System.out.println("Nada Mohamed Ahmed");
		if(args.length != 0)
		{
			IpCutter cut = new IpCutter(args[0]);

			System.out.println("The output of "+ args[0]+" using StringTokenizer is");
			int[] stringTokenizerOut = cut.doIpSplitStringTokenizer();
			for(int i = 0 ; i < stringTokenizerOut.length ; i++ )
			{
				System.out.println(stringTokenizerOut[i]);

			}

			System.out.println("--------------------------------------------");

			System.out.println("The output of "+ args[0]+" using String methods is");
			int[] stringOut = cut.doIpSplitStringClass();
			for(int i = 0 ; i < stringOut.length ; i++ )
			{
				System.out.println(stringOut[i]);

			}
			
		}
	}

}