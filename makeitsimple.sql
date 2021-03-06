PGDMP     ,                    w            makeitsimple    12.1    12.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    16573    makeitsimple    DATABASE     �   CREATE DATABASE makeitsimple WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE makeitsimple;
                postgres    false            �            1259    16698    event_details    TABLE       CREATE TABLE public.event_details (
    id integer NOT NULL,
    detail_id integer NOT NULL,
    price integer NOT NULL,
    quantity integer NOT NULL,
    description text NOT NULL,
    photo bytea NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL
);
 !   DROP TABLE public.event_details;
       public         heap    postgres    false            �            1259    16696    event_details_id_seq    SEQUENCE     �   CREATE SEQUENCE public.event_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.event_details_id_seq;
       public          postgres    false    207            "           0    0    event_details_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.event_details_id_seq OWNED BY public.event_details.id;
          public          postgres    false    206            �            1259    16675    events    TABLE     :  CREATE TABLE public.events (
    id integer NOT NULL,
    event_id integer NOT NULL,
    "createdBy" character varying NOT NULL,
    event_name character varying NOT NULL,
    location character varying NOT NULL,
    city character varying NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL
);
    DROP TABLE public.events;
       public         heap    postgres    false            �            1259    16673    events_id_seq    SEQUENCE     �   CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.events_id_seq;
       public          postgres    false    205            #           0    0    events_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;
          public          postgres    false    204            �            1259    16576    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    username character varying(20),
    password character varying(255),
    "createdAt" date,
    "updatedAt" date,
    "isActive" integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16574    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            $           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �
           2604    16701    event_details id    DEFAULT     t   ALTER TABLE ONLY public.event_details ALTER COLUMN id SET DEFAULT nextval('public.event_details_id_seq'::regclass);
 ?   ALTER TABLE public.event_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            �
           2604    16678 	   events id    DEFAULT     f   ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);
 8   ALTER TABLE public.events ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    16579    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                      0    16698    event_details 
   TABLE DATA           u   COPY public.event_details (id, detail_id, price, quantity, description, photo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    207   �                 0    16675    events 
   TABLE DATA           q   COPY public.events (id, event_id, "createdBy", event_name, location, city, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    205                    0    16576    users 
   TABLE DATA           d   COPY public.users (id, email, username, password, "createdAt", "updatedAt", "isActive") FROM stdin;
    public          postgres    false    203   d       %           0    0    event_details_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.event_details_id_seq', 20, true);
          public          postgres    false    206            &           0    0    events_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.events_id_seq', 32, true);
          public          postgres    false    204            '           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 42, true);
          public          postgres    false    202            �
           2606    16706     event_details event_details_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.event_details
    ADD CONSTRAINT event_details_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.event_details DROP CONSTRAINT event_details_pkey;
       public            postgres    false    207            �
           2606    16683    events events_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.events DROP CONSTRAINT events_pkey;
       public            postgres    false    205            �
           2606    16584    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203               e   x���=� �g����?�������D���~S[L�r@b���C�7mf�VM],i�\\�L�+H�ąa�.W��F��1�o����oe�1�>�         D   x�36�4��4426A'�-uu���\Ɔ �I�I�鉜 �@b�')��`��b!������ �i"�         S  x�}�ג�: �k�s�6�b���6Ņ97T#0�4��Ǜ�7d�2�F�$�/���0���7((��U�Q��
CP�;�~��y}��UVmy�U���5�խ�[R6���gl���7T�B�&�{��V�	Dw~b�*�Ք��E�HB:x݁�C�Ӿ�/���sF~^�r�2;���M�r�*���W�w8잨s2��șPf)��Ϗ��0��4ǿ�ʇ���flw���w15%zJ+f�ڪ��Pq��7�0�*���_k�U���b�/�b��あ���cՅ���ņ�l]Y�~CB��������!��5�v�戅�0�bX��C�#Q�c�����v�ކ�f��d-s�g:����eV����5'e�*{�W}�#�5+��U.�J�����p��Ν�$_4qd��铓 ��V(�$E����.�j�N2��&P;��A�{�e }�'�Q�� [���}o��~��4����Ȉ{g���5�~��6�u���Ω�)�.h��%sTZ><-k�G�Y9�d/����b�A����{��k�7�$����L� NI8�
%�X�Hۺ�'���g�3/��;�r׈m`�n��� >��z�[�s5u4�+����;�m9_NP�X�^���xy�9Z�2rS}0�2��.��`�&("Ih��M����~#Լ���W:�g�<�K�HA��$�{pɁ�;����9K9�I�,���2
��7���:�
����I��<�%�;��M���iXxS�[BLNɜ�"X?>,|HC�5���ֳ�2��S�_	t/�
L3���;�~���K:J�����պs��{&�RMb���kG&1�W����6�WP�C�o�����{L�A��؝� p^�샚x63�ZƤ���|-s��{f� _�I|&�a�y�m����:�+�kD�&ZҭS'd�HL�}yt�8�3s� �I�AA2�D:bɮqͳa�=��4��d[k-ڲ]��M��oGs�J�'����*A����s$����`-�����0���{���?�ǟ�5Pb5d��R��p^m�c�'*=j=}�����M�NE�k] 
H������c��_     