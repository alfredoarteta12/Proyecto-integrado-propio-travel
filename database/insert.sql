-- ==========================================
-- ACTIVITY
-- ==========================================

INSERT INTO activity (activity_name)
VALUES
('Gastronomía'),
('Aventura'),
('Ecoturismo'),
('Cultura'),
('Playa');
-- ==========================================
-- JOURNEY
-- ==========================================

INSERT INTO journey (journey_name)
VALUES
('Mañana'),
('Tarde'),
('Noche');
-- ==========================================
-- GROUP TYPE
-- ==========================================

INSERT INTO group_type (group_name)
VALUES
('Familiar'),
('Parejas'),
('Amigos'),
('Individual');
-- ==========================================
-- BUSINESS
-- ==========================================

INSERT INTO business (

business_name,
email,
phone,
password

)

VALUES (

'Sazonare',
'sazonare@gmail.com',
'3001234567',
'123456'

);
-- ==========================================
-- LOCATION
-- ==========================================

INSERT INTO location (

business_id,
address,
latitude,
longitude

)

VALUES (

1,
'Calle 84 #52-18 Barranquilla',
10.987654,
-74.812345

);
-- ==========================================
-- PROMOTION
-- ==========================================

INSERT INTO promotion (

business_id,
activity_id,
journey_id,
group_type_id,
title,
description,
price,
image,
status

)

VALUES (

1,
1,
1,
1,
'Combo Costeño',
'Disfruta un delicioso almuerzo típico costeño.',
35000,
'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
TRUE

);