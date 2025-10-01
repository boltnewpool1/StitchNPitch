/*
  # Create winners and losers tables

  1. New Tables
    - `winners`
      - `id` (uuid, primary key)
      - `guide_id` (integer, references guide data)
      - `name` (text, guide name)
      - `department` (text, guide department)
      - `supervisor` (text, guide supervisor)
      - `timestamp` (timestamptz, when selected)
      - `chat_ids` (text array, optional chat IDs)
      - `created_at` (timestamptz, record creation time)
    - `losers`
      - `id` (uuid, primary key)
      - `guide_id` (integer, references guide data)
      - `name` (text, guide name)
      - `department` (text, guide department)
      - `supervisor` (text, guide supervisor)
      - `timestamp` (timestamptz, when selected)
      - `chat_ids` (text array, optional chat IDs)
      - `created_at` (timestamptz, record creation time)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access (customize for production)

  3. Performance
    - Add indexes for common queries
*/

-- Create winners table
CREATE TABLE IF NOT EXISTS winners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_id integer NOT NULL,
  name text NOT NULL,
  department text NOT NULL,
  supervisor text NOT NULL,
  timestamp timestamptz NOT NULL,
  chat_ids text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create losers table
CREATE TABLE IF NOT EXISTS losers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_id integer NOT NULL,
  name text NOT NULL,
  department text NOT NULL,
  supervisor text NOT NULL,
  timestamp timestamptz NOT NULL,
  chat_ids text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE winners ENABLE ROW LEVEL SECURITY;
ALTER TABLE losers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your security needs)
CREATE POLICY "Anyone can view winners"
  ON winners
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can add winners"
  ON winners
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can delete winners"
  ON winners
  FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Anyone can view losers"
  ON losers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can add losers"
  ON losers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can delete losers"
  ON losers
  FOR DELETE
  TO public
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS winners_created_at_idx ON winners (created_at DESC);
CREATE INDEX IF NOT EXISTS winners_department_idx ON winners (department);
CREATE INDEX IF NOT EXISTS winners_timestamp_idx ON winners (timestamp DESC);
CREATE INDEX IF NOT EXISTS winners_guide_id_idx ON winners (guide_id);

CREATE INDEX IF NOT EXISTS losers_created_at_idx ON losers (created_at DESC);
CREATE INDEX IF NOT EXISTS losers_department_idx ON losers (department);
CREATE INDEX IF NOT EXISTS losers_timestamp_idx ON losers (timestamp DESC);
CREATE INDEX IF NOT EXISTS losers_guide_id_idx ON losers (guide_id);