function meetingPlanner(slotsA, slotsB, dur) {
  let availSlot = []
  for (let i = 0; i < slotsA.length; i++) {
    let currentSlotA = slotsA[i]
    if (duration(currentSlotA, dur)) {
      for (let j = 0; j < slotsB.length; j++) {
        let currentSlotB = slotsB[j]
        if (duration(currentSlotB, dur)) {
          if (currentSlotA[0] >= currentSlotB[0] && currentSlotB[1] - currentSlotA[0] >= dur) {
            availSlot.push(currentSlotA[0]);
            availSlot.push(currentSlotA[0] + dur)
            return availSlot
          } else if (currentSlotB[0] >= currentSlotA[0] && currentSlotA[1] - currentSlotB[0] >= dur) {
            availSlot.push(currentSlotB[0]);
            availSlot.push(currentSlotB[0] + dur)
            return availSlot

          }
        }
      }
    }
  }
  return availSlot
}


function duration(arr, dur) {
  return arr[1] - arr[0] >= dur
}


// Refactoring

function meetingPlanner(slotsA, slotsB, dur) {
  let aIdx = 0;
  let bIdx = 0;

  while (aIdx < slotsA.length && bIdx < slotsB.length) {
    let start = Math.max(slotsA[aIdx][0], slotsB[bIdx][0])
    let end = Math.min(slotsA[aIdx][1], slotsB[bIdx][1])

    if (start + dur <= end) {
      return [start, start + dur]
    }
    else {
      if (slotsA[aIdx][1] >= slotsB[bIdx][1]) {
        bIdx++
      } else {
        aIdx++
      }
    }
  }
  return [];
}
