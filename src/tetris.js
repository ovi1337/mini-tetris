// _() – Main loop
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.
// o(index) – Pick the next shape from the current bag recursively.
//            Create bag if needed.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// C - Copy of empty playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines, keyboard event
// O – Bag of seven

M=e=>P&&(
    h=0,
    p=P.map((v,i)=>(
        E=~i%2,
        x=eval(e[0]),
        E
            ?0
            :b[h|=x<0|x>9|b[y]>>x&1|y>17,y]|=1<<x,
        y=x
    ),b=[...B]),
    h
),
b=C=Array(9),
o=e=>(O=O||127)>>e%7&1?(O^=1<<e%7,e):o(e+1),
(onkeydown=_=s=>(
    s
        ?(k=s.which-38)%2-k||M`k?v-!E*k:P[2]-(P[i^1]-P[3])*(E|1)`
            ?M`v`
            :P=p
        :(
            P=P||[...'02121303040506161715'.substr(
                o(new Date%7)%7*2,
                8,
                B=[...C,...b].filter(v=>v^1023||!(S+=++s)).slice(-18)
            )],
            M`v-E`&&M`v`&(p=k=0),
            setTimeout(_,k-2&&200,0),
            P=p
        ),
        S|=b.map(v=>{S+=`
`;for(x=10;x--;)Z.innerText=S+='□■'[v^1023+P&&v>>x&1]})
))(S=P=k=O=0)
