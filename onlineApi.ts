export interface PendingPlayerRegistration {
  id: string;
  firstNameEn: string;
  lastNameEn: string;
  fullNameFa: string;
  photoUrl: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  playerId?: string;
  pinCode?: string;
  jerseyNumber?: number;
  position?: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  positionFa?: string;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\\/$/, '');

const api = async (path: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${path}`;
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'خطا در ارتباط با سرور');
  return data;
};

export const isOnlineBackendConfigured = () => true;

export async function onlineAdminLogin(password: string) {
  return api('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  }) as Promise<{ token: string }>;
}

export async function fetchOnlinePlayers() {
  return api('/api/players') as Promise<{ players: any[] }>;
}

export async function fetchPendingRegistrations(token: string) {
  return api('/api/admin/player-registrations', {
    headers: { Authorization: `Bearer ${token}` },
  }) as Promise<{ registrations: PendingPlayerRegistration[] }>;
}

export async function approvePlayerRegistration(token: string, id: string, payload: { jerseyNumber: number; position: string }) {
  return api(`/api/admin/player-registrations/${encodeURIComponent(id)}/approve`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }) as Promise<{ player: any; registration: PendingPlayerRegistration }>;
}

export async function rejectPlayerRegistration(token: string, id: string) {
  return api(`/api/admin/player-registrations/${encodeURIComponent(id)}/reject`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  }) as Promise<{ registration: PendingPlayerRegistration }>;
}

export async function registerPlayerOnline(form: {
  firstNameEn: string;
  lastNameEn: string;
  fullNameFa: string;
  jerseyNumber?: number;
  position?: string;
  photo: File;
}) {
  const body = new FormData();
  body.append('firstNameEn', form.firstNameEn);
  body.append('lastNameEn', form.lastNameEn);
  body.append('fullNameFa', form.fullNameFa);
  body.append('jerseyNumber', String(form.jerseyNumber || 0));
  body.append('position', form.position || 'Forward');
  body.append('photo', form.photo);
  return api('/api/player-registrations', { method: 'POST', body }) as Promise<{ registration: PendingPlayerRegistration }>;
}
