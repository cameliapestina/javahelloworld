function calculate (operator,value1,value2 ){
    if (isNaN(value1) || isNaN(value2))
            return " please enter numeric number! "
    else
    {
        if (operator == '+')
            return (
              console.log(value1+value2),
              console.log(arguments)
              );
        else if (operator == '*' or "x")
            return (
              console.log(value1*value2),
              console.log(arguments)
              );
        else if (operator == '-')
            return (
              console.log(value1-value2),
              console.log(arguments)
              );
        else if (operator == '/'){
              if (value1 !== 0 && value2 !== 0) 
              return(
              console.log(value1/value2),
              console.log(arguments)
              )
              else return 0;
         else
             return "unsupported operator "
    }
}