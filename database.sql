CREATE DATABASE postgREST;

CREATE TABLE public.user (
	id BIGSERIAL PRIMARY KEY,
	name character varying NOT NULL,
	email character varying NOT NULL,
	address character varying NOT NULL,
	bio character varying NOT NULL,
	vip boolean NOT NULL
);
