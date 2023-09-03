<?php

/**
 * Joomla! Content Management System
 *
 * @copyright  (C) 2023 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

namespace Joomla\CMS\Event\Finder;

use Joomla\CMS\Event\AbstractImmutableEvent;

// phpcs:disable PSR1.Files.SideEffects
\defined('_JEXEC') or die;
// phpcs:enable PSR1.Files.SideEffects

/**
 * Class for Finder events.
 * Example:
 *  new GarbageCollectionEvent('onEventName', []);
 *
 * @since  __DEPLOY_VERSION__
 */
class GarbageCollectionEvent extends AbstractImmutableEvent implements FinderEventInterface
{
}
