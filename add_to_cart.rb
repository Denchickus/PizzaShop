hh = {}

loop do

	print "Enter product id: "
	id = gets.chomp

	print "Enter amount (how much items you want to order): "
	n = gets.chomp.to_i

	x = hh[id].to_i # read hash value (0 if it's not exis)
	x = x + n       # increase by n

	hh[id] = x      # set hash value

	puts hh.inspect


	# calculate total number items in cart
	total = 0
	hh.each do |key, value|
		total = total + hh[key]
	end

	# puts total variable
	puts "Total items in cart: #{total}"

	puts '========================================'

end

