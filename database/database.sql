-- ======================================================
-- EL PROPIO TRAVEL
-- DATABASE SCHEMA
-- PostgreSQL
-- ======================================================

-- ======================================================
-- TABLE: BUSINESS
-- ======================================================

CREATE TABLE business (

    business_id SERIAL PRIMARY KEY,

    business_name VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    phone VARCHAR(10) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL

);

-- ======================================================
-- TABLE: ACTIVITY
-- ======================================================

CREATE TABLE activity (

    activity_id SERIAL PRIMARY KEY,

    activity_name VARCHAR(100) NOT NULL UNIQUE

);

-- ======================================================
-- TABLE: JOURNEY
-- ======================================================

CREATE TABLE journey (

    journey_id SERIAL PRIMARY KEY,

    journey_name VARCHAR(50) NOT NULL UNIQUE

);

-- ======================================================
-- TABLE: GROUP_TYPE
-- ======================================================

CREATE TABLE group_type (

    group_type_id SERIAL PRIMARY KEY,

    group_name VARCHAR(50) NOT NULL UNIQUE

);

-- ======================================================
-- TABLE: LOCATION
-- ======================================================

CREATE TABLE location (

    location_id SERIAL PRIMARY KEY,

    business_id INT NOT NULL,

    address VARCHAR(150) NOT NULL,

    latitude DECIMAL(10,8) NOT NULL,

    longitude DECIMAL(11,8) NOT NULL,

    CONSTRAINT fk_location_business
        FOREIGN KEY (business_id)
        REFERENCES business(business_id)

);

-- ======================================================
-- TABLE: PROMOTION
-- ======================================================

CREATE TABLE promotion (

    promotion_id SERIAL PRIMARY KEY,

    business_id INT NOT NULL,

    activity_id INT NOT NULL,

    journey_id INT NOT NULL,

    group_type_id INT NOT NULL,

    title VARCHAR(100) NOT NULL,

    description TEXT NOT NULL,

    price NUMERIC(10,2) NOT NULL,

    image TEXT NOT NULL,

    status BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_promotion_business
        FOREIGN KEY (business_id)
        REFERENCES business(business_id),

    CONSTRAINT fk_promotion_activity
        FOREIGN KEY (activity_id)
        REFERENCES activity(activity_id),

    CONSTRAINT fk_promotion_journey
        FOREIGN KEY (journey_id)
        REFERENCES journey(journey_id),

    CONSTRAINT fk_promotion_group_type
        FOREIGN KEY (group_type_id)
        REFERENCES group_type(group_type_id)

);

-- ======================================================
-- TABLE: CLIENT
-- ======================================================

CREATE TABLE client (

    client_id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE,

    phone VARCHAR(10) UNIQUE

);