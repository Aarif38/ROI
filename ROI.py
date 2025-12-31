import cv2

cam = cv2.VideoCapture(0)

if not cam.isOpened():
    print("Hata: Kamera açılamadı!")
    exit()

print("Çıkmak için 'q' tuşuna basın.")

while True:
    ret, frame = cam.read()
    if not ret:
        print("Görüntü alınamadı.")
        break

    height, width = frame.shape[:2]

    center_x = width // 2
    center_y = height // 2

    x1 = center_x - 100
    y1 = center_y - 100
    x2 = center_x + 100
    y2 = center_y + 100

    if x1 < 0: x1 = 0
    if y1 < 0: y1 = 0
    if x2 > width: x2 = width
    if y2 > height: y2 = height

    roi = frame[y1:y2, x1:x2]

    roi_gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)

    roi_bgr = cv2.cvtColor(roi_gray, cv2.COLOR_GRAY2BGR)

    frame[y1:y2, x1:x2] = roi_bgr

    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)

    cv2.imshow('ROI', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cam.release()
cv2.destroyAllWindows()