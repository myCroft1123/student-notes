//Sean O'Dell 07/24/2020

//sensei: pjfranzini

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

// A 1x1 matrix |a| has determinant a.

// A 2x2 matrix [ [a, b], [c, d] ] or

// |a  b|
// |c  d|

// has determinant: a*d - b*c.

// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

// |a b c|  
// |d e f|  
// |g h i|  

// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

// |- - -|
// |- e f|
// |- h i|  

// Note the alternation of signs.

// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)







function determinant(m) {
    switch (m.length) {
        //handles empty matrix
        case 0: return 1;
        //exit condition && handles singleton matrix
        case 1: return m[0][0];
        default:
        //detrmnnt will build array of terms to be combined into determinant
        //ex. a*det(a_minor) - b*det(b_minor)...
          let detrmnnt = []
          //pos controls alternation of terms ('+' or '-')
          for (let i = 0, pos = 1; i < m.length; i++, pos *= -1) {
            //adds term, ex. +/- a * det(a_minor)
            detrmnnt.push(pos * (m[0][i] * determinant(nMinor(m, i))))
          }
          return detrmnnt.reduce((accu, elem) => accu + elem)
    }
  };
  
  //functions creates n_minor from m
  function nMinor (m, n) {
    let minor = []
    //h = 1 to skip first row of matrix
    for (let h = 1; h < m.length; h++) {
      minor.push(m[h].filter((el, it) => it !== n))
    }
    return minor
  }