let a=15,b=2,flag=0;
while(b<a/2)
{
    if(a%b==0)
    {
        flag=1;
        break;
    }
    else
        b=b+1;
}
if(flag==0)
    console.log("prime number");
else
    console.log("Not a Prime number");