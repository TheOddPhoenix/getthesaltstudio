-- Run once in a new Supabase project. Service-role credentials stay server-side.
create table public.products (id text primary key, data jsonb not null);
create unique index products_slug on public.products ((data->>'slug'));
create table public.orders (
 stripe_session_id text primary key,
 stripe_event_id text not null,
 status text not null default 'paid_pending_review',
 amount_total integer,
 currency text,
 checkout jsonb not null,
 items jsonb not null,
 created_at timestamptz not null default now()
);
alter table public.products enable row level security;
alter table public.orders enable row level security;
-- No anonymous or authenticated-user policies. Only backend service-role access.
revoke all on public.products, public.orders from anon, authenticated;
