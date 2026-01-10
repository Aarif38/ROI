import cv2
import numpy as np

def bos(x):
    pass

cam = cv2.VideoCapture(0)

cv2.namedWindow("Ayarlar")
cv2.resizeWindow("Ayarlar", 640, 240)

cv2.createTrackbar("H_min", "Ayarlar", 0, 179, bos)
cv2.createTrackbar("H_max", "Ayarlar", 179, 179, bos)
cv2.createTrackbar("S_min", "Ayarlar", 0, 255, bos)
cv2.createTrackbar("S_max", "Ayarlar", 255 , 255, bos)
cv2.createTrackbar("V_min", "Ayarlar", 0, 255, bos)
cv2.createTrackbar("V_max", "Ayarlar", 255, 255, bos)


print("Program çalışıyor. Çıkmak için 'q' tuşuna basın.")

while True:
    ret, frame = cam.read()
    if not ret:
        break
    
    frame = cv2.flip(frame, 1)

    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    h_min = cv2.getTrackbarPos("H_min", "Ayarlar")
    h_max = cv2.getTrackbarPos("H_max", "Ayarlar")
    s_min = cv2.getTrackbarPos("S_min", "Ayarlar")
    s_max = cv2.getTrackbarPos("S_max", "Ayarlar")
    v_min = cv2.getTrackbarPos("V_min", "Ayarlar")
    v_max = cv2.getTrackbarPos("V_max", "Ayarlar")

    alt_sinir = np.array([h_min, s_min, v_min])
    ust_sinir = np.array([h_max, s_max, v_max])

    mask = cv2.inRange(hsv_frame, alt_sinir, ust_sinir)

    cv2.imshow("Orijinal Goruntu", frame)
    cv2.imshow("Maskelenmis Goruntu", mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cam.release()
cv2.destroyAllWindows()