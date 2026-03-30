import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInquiries, deleteInquiry, markAsRead } from '../../features/inquiries/inquiriesSlice';
import { Mail, MailOpen, Trash2, Calendar, User, Phone } from 'lucide-react';

export function AdminInquiries() {
  const dispatch = useDispatch();
  const { items: inquiries, loading, error } = useSelector((state) => state.inquiries);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [expandedInquiry, setExpandedInquiry] = useState(null);

  useEffect(() => {
    dispatch(fetchInquiries());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteInquiry(id));
    setDeleteConfirm(null);
  };

  const handleToggleRead = async (id, currentReadStatus) => {
    await dispatch(markAsRead({ id, read: !currentReadStatus }));
  };

  const toggleExpanded = (id) => {
    setExpandedInquiry(expandedInquiry === id ? null : id);
  };

  if (loading && inquiries.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-(--color-taupe)">Loading inquiries...</div>
      </div>
    );
  }

  const unreadCount = inquiries.filter(i => !i.read).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl text-(--color-navy) mb-2">Inquiries</h1>
            <p className="text-(--color-taupe)">
              {inquiries.length} total inquiries
              {unreadCount > 0 && ` • ${unreadCount} unread`}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-(--color-oxblood)/10 border border-(--color-oxblood)/30 text-(--color-oxblood) px-4 py-3 mb-6 text-sm">
          {error}
        </div>
      )}

      {/* Inquiries List */}
      {inquiries.length === 0 ? (
        <div className="bg-white p-12 text-center">
          <Mail className="w-16 h-16 text-(--color-taupe) mx-auto mb-4" />
          <h3 className="text-xl text-(--color-navy) mb-2">No inquiries yet</h3>
          <p className="text-(--color-taupe)">Customer inquiries will appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div 
              key={inquiry.id} 
              className={`bg-white border-l-4 transition-colors ${
                inquiry.read ? 'border-(--color-stone)/30' : 'border-muted-gold'
              }`}
            >
              {/* Inquiry Header */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-(--color-navy)">{inquiry.name}</h3>
                      {!inquiry.read && (
                        <span className="px-2 py-0.5 bg-(--color-oxblood) text-white text-xs uppercase tracking-wider">
                          New
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-(--color-stone)/30 text-(--color-navy) text-xs uppercase tracking-wider">
                        {inquiry.inquiryType || 'General'}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-(--color-taupe) mb-4">
                      <div className="flex items-center gap-2">
                        <Mail size={14} />
                        {inquiry.email}
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          {inquiry.phone}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {inquiry.createdAt?.toDate?.()?.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) || 'N/A'}
                      </div>
                    </div>

                    {inquiry.subject && (
                      <div className="mb-3">
                        <span className="text-xs uppercase tracking-wider text-(--color-taupe)">Subject:</span>
                        <p className="text-(--color-navy) mt-1">{inquiry.subject}</p>
                      </div>
                    )}

                    {/* Message Preview/Full */}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-(--color-taupe)">Message:</span>
                      <p className={`text-(--color-navy)/80 mt-1 whitespace-pre-wrap ${
                        expandedInquiry === inquiry.id ? '' : 'line-clamp-2'
                      }`}>
                        {inquiry.message}
                      </p>
                      {inquiry.message?.length > 150 && (
                        <button
                          onClick={() => toggleExpanded(inquiry.id)}
                          className="text-sm text-muted-gold hover:text-(--color-navy) transition-colors mt-2 uppercase tracking-wider"
                        >
                          {expandedInquiry === inquiry.id ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleRead(inquiry.id, inquiry.read)}
                      className="p-2 border border-(--color-navy)/20 hover:border-muted-gold hover:bg-muted-gold/5 transition-all"
                      title={inquiry.read ? 'Mark as unread' : 'Mark as read'}
                    >
                      {inquiry.read ? <Mail size={18} className="text-(--color-taupe)" /> : <MailOpen size={18} className="text-muted-gold" />}
                    </button>
                    {deleteConfirm === inquiry.id ? (
                      <>
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          className="px-4 py-2 bg-(--color-oxblood) text-white hover:bg-(--color-oxblood)/90 transition-all text-xs uppercase tracking-wider"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-4 py-2 border border-(--color-navy)/20 hover:bg-(--color-stone)/10 transition-all text-xs uppercase tracking-wider text-(--color-navy)"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(inquiry.id)}
                        className="p-2 border border-(--color-navy)/20 hover:border-(--color-oxblood) hover:bg-(--color-oxblood)/5 transition-all"
                        title="Delete inquiry"
                      >
                        <Trash2 size={18} className="text-(--color-oxblood)" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
