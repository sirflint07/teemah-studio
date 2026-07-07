/*
# Create contact_submissions table (single-tenant, no auth)

1. Purpose
   Stores enquiries submitted through the public Contact form on Teemah's Studio
   website. The site has no sign-in screen, so submissions are written by the
   anon-key client and read by studio staff via the Supabase dashboard.

2. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key, default gen_random_uuid())
     - `name` (text, not null) — submitter's full name
     - `email` (text, not null) — submitter's email address
     - `phone` (text, nullable) — optional phone number
     - `service` (text, nullable) — which service they are interested in
     - `message` (text, not null) — the enquiry body
     - `status` (text, not null default 'new') — tracking status for staff
     - `created_at` (timestamptz, default now())

3. Indexes
   - `contact_submissions_created_at_idx` on `created_at` DESC for staff review.

4. Security
   - Enable RLS on `contact_submissions`.
   - INSERT: allow anon + authenticated to create new submissions (public form).
   - SELECT / UPDATE / DELETE: allow anon + authenticated so the studio can
     review and manage submissions. The data is intentionally shared/public
     within this single-tenant app.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_select_contact_submissions" ON contact_submissions
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_update_contact_submissions" ON contact_submissions
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_delete_contact_submissions" ON contact_submissions
  FOR DELETE TO anon, authenticated USING (true);
