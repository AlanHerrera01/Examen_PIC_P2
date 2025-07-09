--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-08 23:09:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4808 (class 0 OID 49184)
-- Dependencies: 218
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios VALUES (1, 'Alan', 'Herrera', 'alan@mail.com', '1234', 'creador') ON CONFLICT DO NOTHING;
INSERT INTO public.usuarios VALUES (3, 'Admin', 'Root', 'admin@admin.com', '12345678', 'administrador') ON CONFLICT DO NOTHING;
INSERT INTO public.usuarios VALUES (2, 'Maria', 'Lopez', 'maria@mail.com', '5678', 'consumidor') ON CONFLICT DO NOTHING;


--
-- TOC entry 4810 (class 0 OID 49193)
-- Dependencies: 220
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cursos VALUES (1, 'Node.js Básico', 'Introducción al desarrollo backend con Node.js', 'activo', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.cursos VALUES (2, 'React para principiantes', 'Frontend con React y Vite', 'en construcción', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.cursos VALUES (3, 'Docker y Kubernetes', 'Curso avanzado de contenedores', 'inactivo', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.cursos VALUES (4, 'Web3', 'programacion', 'Activo', 1) ON CONFLICT DO NOTHING;


--
-- TOC entry 4812 (class 0 OID 49207)
-- Dependencies: 222
-- Data for Name: suscripciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.suscripciones VALUES (1, 2, 1) ON CONFLICT DO NOTHING;
INSERT INTO public.suscripciones VALUES (2, 2, 2) ON CONFLICT DO NOTHING;
INSERT INTO public.suscripciones VALUES (3, 2, 3) ON CONFLICT DO NOTHING;


--
-- TOC entry 4818 (class 0 OID 0)
-- Dependencies: 219
-- Name: cursos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_seq', 4, true);


--
-- TOC entry 4819 (class 0 OID 0)
-- Dependencies: 221
-- Name: suscripciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.suscripciones_id_seq', 3, true);


--
-- TOC entry 4820 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


-- Completed on 2025-07-08 23:09:33

--
-- PostgreSQL database dump complete
--

