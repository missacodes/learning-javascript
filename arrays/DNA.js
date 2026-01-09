const dnaPieces = ["A", "C", "G", "T"];
const myDna = []
for (let i = 0; i <24; i++)
{
    const piece1 = Math.floor(Math.random()*4);
    const piece2 = Math.floor(Math.random()*4);
    const piece3 = Math.floor(Math.random()*4);
    const dnaPiece1 = dnaPieces[piece1]
    const dnaPiece2 = dnaPieces[piece2]
    const dnaPiece3 = dnaPieces[piece3]
    const dnaMakeup = dnaPiece1 + dnaPiece2 + dnaPiece3;
    myDna.push(dnaMakeup);
}
console.log(myDna);