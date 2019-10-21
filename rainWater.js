function totalVol(blocks) {
  // 'peak' is set to the return of Math.max()
  //  when it is applied to the array with
  // 'null' as the 'this'.
  const peak = Math.max(...blocks);

  // instantiate volume to 0
  let vol = 0;

  // this loop starts at the 'peak' height
  // then decrements the height
  for (let height = peak; height > 0; height--) {

    // 'peaksAtHeightLevel' is set to the return of
    // 'peakIndicesMaker' which is an array of indices
    //  of reservoir walls that exist at that level.
    const peaksAtHeightLevel = peakIndicesMaker(blocks, height);
    console.log(peaksAtHeightLevel)
    // 'vol' is then incremented by the volume that exists
    // at that level.
    console.log('volume', volAtLevel(peaksAtHeightLevel));
    vol += volAtLevel(peaksAtHeightLevel);
  }

  // total volume is returned
  return vol;
}


/* As demonstrated above this function takes
the original array as well as the height level
and returns an array of indices where reservoir
walls exist*/
function peakIndicesMaker(blocks, level) {

  // instantiation
  const peakIndices = [];

  // loop over the entire array
  for (let i = 0; i < blocks.length; i++) {

    // if the wall height present at each index
    // is at least the height of the given level
    // then that index is pushed to the output array
    if (blocks[i] >= level) {
      peakIndices.push(i);
    }
  }

  // array of indices is returned
  return peakIndices;
}

/* This is the meat of the calculation for this problem.
The key point to understand is that the distance between
the two walls at the same height will also be the
volume of water held between them.  Finally if two walls of
at least the same height are adjacent to one another then it
is not possible for water to be present.*/
function volAtLevel(peakIndices) {

  // instantiation
  let levelVol = 0;

  // if there is only one wall at the height currently being
  // calculated, there cannot physically be any water
  // at that level.  In this case we return 0 volume.
  if (peakIndices.length === 1) {
    return 0;
  } else {

    // If there is more than one wall of at least the current
    // level being measured then the level volume is incremented
    // for each 'pair' of walls at that level.  It is important
    // to note that we are comparing each wall to its adjacent
    // neighbor located at the next index in the array.  Therefore
    // the last element in the array could not possibly hold water
    // to its right.  This is because no wall exists at that level
    // beyond the last wall.
    for (let i = 0; i < (peakIndices.length - 1); i++) {

      // this is the most important part of the function.
      // Instead of simply summing the difference of the
      // indices we have to think about the physical nature
      // of the walls. The walls have a width of 1 so we
      // need to measure the right side of one wall to the
      // left side of its neighbor.  This ensures that a total
      // volume of 0 is added for adjacent walls.
      levelVol += (peakIndices[i + 1] - (peakIndices[i] + 1));

    };
  }

  // the level volume is then returned after all pairs have been summed.
  return levelVol
}

console.log(totalVol([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
