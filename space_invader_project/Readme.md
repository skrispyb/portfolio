# Alien Invaders project modifications:

1.	All drones change Y position together.
2.	Tank shoot bullets with space bar.
3.	Collision detection on drones and UFO.
4.	Drones and UFO gets removed on hit.
5.	Score points on hitting Drones (10 points) and UFO (100 points).
6.	Display “Instructions”, “Current Score” and “High Score”.

## Drones Y position:
I selected the first drone and fixed extreme points for that and then I set all other drones to change their movement based on the first drone. So, now if the first drone hits left extreme point, it makes all the drone change direction of movement and Y position. On the right side I had to hit and trial to find the position for first drone so that the last drone in the row is touching the right extreme. Once found I hard coded the coordinates for the first drone and on condition met all drones will change directions and positions. 

## Tank shooting bullets: 
I created a bullet that is permanently attached to the tank. Making it look like the tank has bullets to fire. Then I created a listener for the space bar to trigger bullet fire. And then I just used similar code as the drone to move the bullet in negative-Y(this was confusion at first) direction.

## Collision Detection:
I looped through the drones and compared their positions with the bullets position to detect collision. This was a tricky condition, as I had to keep in mind the x,y of the drone and x+w,y+h to compare with the bullet’s position. So, to detect collision I had to check if (bullet’s X >= drone’s X && bullet’s X <=drone’s X + width && bullet’s Y >= drone’s Y && bullet’s Y <= drone’s Y + height). 
Repeat same technique for the UFO but this time I did not have to use the loop, because there was only 1 UFO. But in this case the coordinates were different as for an ellipse the x,y coordinate is the center point. So, I had to compare the bullet’s x,y with UFO’s X-30, X+30 and Y-5, Y+5 to detect the collision.

## Drones removed:
For this I added a new property called alive which takes Boolean value. If true then it(drone or ufo) is drawn on the canvas else it is not drawn. So, on collision I simple change this value to false.

## Score counter:
After collision detection I also added a score counter along with the alive property. To count current score. 10 points to hit a drone and 100 points for the UFO. Also added High Score. Although the game is not that advanced for this information. So, in order to make the game little challenging and make use of High score I limited the bullets to 50. Now the player has to shoot wisely in order to get high score.
