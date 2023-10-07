let str = "xox";
let newstr;
console.log("originalStr= " + str);

newstr = str.split('');
newstr.reverse();
let reverserstr = newstr.join('');

console.log("reversed= " + reverserstr);

if(reverserstr === str)
{
    console.log("reverse true");
}
else
{
    console.log("reverse false");
}
