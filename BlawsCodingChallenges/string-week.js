function fixMixUps(str) {
	let result = str.split('').map((char) => {
		return char == '0'
			? (char = 'O')
			: char == 'O'
			? (char = '0')
			: char == '1'
			? (char = 'I')
			: char == 'I'
			? (char = '1')
			: char == '2'
			? (char = 'Z')
			: char == 'Z'
			? (char = '2')
			: char == '3'
			? (char = 'E')
			: char == 'E'
			? (char = '3')
			: char == '4'
			? (char = 'h')
			: char == 'h'
			? (char = '4')
			: char == '5'
			? (char = 'S')
			: char == 'S'
			? (char = '5')
			: char == '6'
			? (char = 'G')
			: char == 'G'
			? (char = '6')
			: char == '7'
			? (char = 'L')
			: char == 'L'
			? (char = '7')
			: char == '8'
			? (char = 'B')
			: char == 'B'
			? (char = '8')
			: char == '9'
			? (char = 'q')
			: char == 'q'
			? (char = '9')
			: char
	})
	return result.join('')
}

// function cleanUpString(str) {
// 	const removeCatTyping = str.slice(str.indexOf('c'))
// 	const removeEek = removeCatTyping.replaceAll('Eek!', '').split('')
// 	return removeEek.reverse().join('')
// }

// cleanUpString(
// 	"af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"
// )

// function tomorrowsTask(str) {
// 	let substrings = str.split('v')
// 	return substrings.map((substring) => substring[0]).slice(1)
// }

// tomorrowsTask(
// 	"Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuc"
// )

function replaceKeyChars(str) {
	const keyChars = ['S', 'p', 'a', 'c', 'e']
	return str
		.split('')
		.map((letter) => (keyChars.includes(letter) ? (letter = ' ') : letter))
		.join('')
}

function reverseString(str) {
	return str.split('').reverse().join('')
}

// function chooseFinalists(str) {
// 	const noLeadingTrailingSpaces = (str) =>
// 		str.charAt(0) !== ' ' && str.charAt(str.length - 1) !== ' '

// 	const canineTrolling = (str) => {
// 		const lowerCaseStr = str.toLowerCase()
// 		return (
// 			!lowerCaseStr.includes('dog') &&
// 			!lowerCaseStr.includes('bark') &&
// 			!lowerCaseStr.includes('bone')
// 		)
// 	}

// 	const noMultiplesOfFive = (str) => str.length % 5 !== 0

// 	const oddCharCode = (str) => {
// 		let sum = str.charCodeAt(0) + str.charCodeAt(str.length - 1)
// 		return sum % 2 !== 0
// 	}

// 	const midCharNotE = (str) => {
// 		const midChar = Math.ceil(str.length / 2)
// 		return str.charAt(midChar) !== 'e'
// 	}

// 	const evenLowerCaseChars = (str) => {
// 		str = str.replace(/[^\p{L}\p{N}\s]/gu, '')

// 		let count = 0
// 		for (let i = 0; i < str.length; i++) {
// 			const char = str.charAt(i)
// 			if (char !== ' ' && char === char.toLowerCase()) {
// 				count++
// 			}
// 		}
// 		return !(count % 2)
// 	}

// 	const twoUpperCaseChars = (str) => {
// 		let count = 0
// 		for (let i = 0; i < str.length; i++) {
// 			const char = str.charAt(i)
// 			if (char !== ' ' && char === char.toUpperCase()) {
// 				count++
// 			}
// 		}
// 		return count >= 2
// 	}

// 	const noCapitalS = (str) => !str.includes('S')

// 	return str
// 		.split(',')
// 		.filter(
// 			(submission) =>
// 				noLeadingTrailingSpaces(submission) &&
// 				canineTrolling(submission) &&
// 				noMultiplesOfFive(submission) &&
// 				oddCharCode(submission) &&
// 				midCharNotE(submission) &&
// 				evenLowerCaseChars(submission) &&
// 				twoUpperCaseChars(submission) &&
// 				twoUpperCaseChars(submission) &&
// 				noCapitalS(submission)
// 		).length
// }

// console.log(
// 	chooseFinalists(
// 		"The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
// 	)
// )

<<<<<<< HEAD
=======
function decodeHiddenMessage(str) {
	console.log(reverseString(replaceKeyChars(fixMixUps(str))))
}

// decodeHiddenMessage(
// 	'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'
// )

function chooseFinalists(str) {
	const noLeadingTrailingSpaces = (str) =>
		str.charAt(0) !== ' ' && str.charAt(str.length - 1) !== ' '

	const canineTrolling = (str) => {
		const lowerCaseStr = str.toLowerCase()
		return (
			!lowerCaseStr.includes('dog') &&
			!lowerCaseStr.includes('bark') &&
			!lowerCaseStr.includes('bone')
		)
	}

	const noMultiplesOfFive = (str) => str.length % 5 !== 0

	const oddCharCode = (str) => {
		let sum = str.charCodeAt(0) + str.charCodeAt(str.length - 1)
		return sum % 2 !== 0
	}

	const midCharNotE = (str) => {
		const midChar = Math.ceil(str.length / 2)
		console.log(midChar)
		return str.charAt(midChar) !== 'e'
	}

	const evenLowerCaseChars = (str) => {
		str = str.replace(/[^\p{L}\p{N}\s]/gu, '')

		let count = 0
		for (let i = 0; i < str.length; i++) {
			const char = str.charAt(i)
			if (char !== ' ' && char === char.toLowerCase()) {
				count++
			}
		}
		return !(count % 2)
	}

	const twoUpperCaseChars = (str) => {
		let count = 0
		for (let i = 0; i < str.length; i++) {
			const char = str.charAt(i)
			if (char !== ' ' && char === char.toUpperCase()) {
				count++
			}
		}
		return count >= 2
	}

	const noCapitalS = (str) => !str.includes('S')

	return str
		.split(',')
		.filter(
			(submission) =>
				noLeadingTrailingSpaces(submission) &&
				canineTrolling(submission) &&
				noMultiplesOfFive(submission) &&
				oddCharCode(submission) &&
				midCharNotE(submission) &&
				evenLowerCaseChars(submission) &&
				twoUpperCaseChars(submission) &&
				twoUpperCaseChars(submission) &&
				noCapitalS(submission)
		).length
}

console.log(
	chooseFinalists(
		"The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
	)
)

>>>>>>> 46bd6ea89770dfbdccb216210c4b0d8eff40742c
// ['Teenage Mewtant Ninja Turtles', 'Rick & Meowty', "Mewster Rogers' Neighborhood"]

function removeEveryXthCharacter(str, x = 3) {
	return str
		.split('')
		.map((e, i) => (!((i + 1) % x) ? '' : e))
		.join('')
}

function oppositeLetters(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const reverseAlphabet = [...alphabet].reverse()
	return str
		.split('')
		.map((char, i) => {
			if (!alphabet.includes(char.toLowerCase())) {
				return char
			} else {
				const index = alphabet.indexOf(char.toLowerCase())
				return (char =
					char === char.toUpperCase()
						? reverseAlphabet[index]
						: reverseAlphabet[index].toUpperCase())
			}
		})
		.join('')
}

function decodeHiddenMessage(str) {
	return oppositeLetters(
		removeEveryXthCharacter(reverseString(replaceKeyChars(fixMixUps(str))), 3)
	)
}

const encryptedMsg =
	'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'

console.log(decodeHiddenMessage(encryptedMsg))
