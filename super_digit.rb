# pass input super_digit(n k)

def handle(new_number)
  value_array = new_number.split(//).map{|num| num.to_i}
  sum = value_array.reduce(:+)
  # super_digit = handle(new_number)
  if sum < 10
    return sum
  else
    puts sum
    handle(sum.to_s)
  end
end

def super_digit(params)
  values =  params.split(" ")
  n = values[0]
  k = values[1]

  new_number = n * k.to_i
  return handle(new_number)
end
