export function regularPolygonPoints(sideCount, radius) {
  var sweep = (Math.PI * 2) / sideCount;
  var cx = radius;
  var cy = radius;
  var points = [];
  for (var i = 0; i < sideCount; i++) {
    var x = cx + radius * Math.cos(i * sweep);
    var y = cy + radius * Math.sin(i * sweep);
    points.push({ x: x, y: y });
  }
  return points;
}

export function starPolygonPoints(spikeCount, outerRadius, innerRadius) {
  var rot = (Math.PI / 2) * 3;
  var cx = outerRadius;
  var cy = outerRadius;
  var sweep = Math.PI / spikeCount;
  var points = [];
  var angle = 0;

  for (var i = 0; i < spikeCount; i++) {
    var x = cx + Math.cos(angle) * outerRadius;
    var y = cy + Math.sin(angle) * outerRadius;
    points.push({ x: x, y: y });
    angle += sweep;

    x = cx + Math.cos(angle) * innerRadius;
    y = cy + Math.sin(angle) * innerRadius;
    points.push({ x: x, y: y });
    angle += sweep;
  }
  return points;
}
